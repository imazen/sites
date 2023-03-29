#!/bin/bash
#this script executes using bash

# This scipt updates every .md file in the repo by changing the 
# frontmatter date_published and date_updated to match the git history
# It will only create a PR if there are changes to the .md files
# It will only run on the main branch
# it uses the 'yq' command to update each .md file

# Exit on error
set -e

# go to the root of the repo using the env var if present
if [ -n "$GITHUB_WORKSPACE" ]; then
    cd "$GITHUB_WORKSPACE"
    cd src/content
else
    #find the repository root
    cd "$(git rev-parse --show-toplevel)"
    cd src/content/
fi

echo "Updating dates in frontmatter in $(pwd)"

for file in $(find . -name "*.md"); do
    echo
    echo -n "Checking $file..."
    # get the first date the file was added to the repo and the last date it was updated

    # these are producing the same date even when the file has been edited many times
    date_published=$(git log --format=%aI --date=iso-strict --reverse -- "$file" | tail -1)
    date_updated=$(git log --format=%aI --date=iso-strict -- "$file" | tail -1)

    if grep -q "^---\s*\r\?$" "$file"; then


        # if the dates are idential, write a warning
        if [ "$date_published" = "$date_updated" ]; then
            echo -n "only one commit found... "
        fi

        sed -n '/^---\s*\r\?$/,/^---\s*\r\?$/p' "$file" > frontmatter.txt   

        # remove the first and last line of frontmatter.txt
        sed -i '$ d' frontmatter.txt
        sed -i '1d' frontmatter.txt

        # exit this iteration of the loop if date_published and date_updated are already in the frontmatter and match
        # using yq
        if [[ $(yq eval '.date_published' frontmatter.txt) == "$date_published" ]] && [[ $(yq eval '.date_updated' frontmatter.txt) == "$date_updated" ]]; then
            echo -n "already up-to-date\n"
            continue
        fi

        # remove the frontmatter from the .md file
        sed -i '/^---\s*\r\?$/,/^---\s*\r\?$/d' "$file"

        # update the dates in frontmatter if they exist
        if [[ -s "frontmatter.txt" ]]; then
            yq -i eval ".date_published |= select(.==null) |=\"$date_published\"" frontmatter.txt 
            yq -i eval ".date_updated = \"$date_updated\"" frontmatter.txt 

            echo "update frontmatter: \n$(cat frontmatter.txt)\n\n"

            # add frontmatter.txt back to the .md file with surrounding ----
            
            echo "---" > assemble.txt
            cat frontmatter.txt >> assemble.txt
            echo "---" >> assemble.txt
            cat "$file" >> assemble.txt
            mv assemble.txt "$file"
        fi

        rm frontmatter.txt
    else
        echo "no frontmatter found\n"
    fi
done
