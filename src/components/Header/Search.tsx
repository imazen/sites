/** @jsxImportSource react */
import { useState, useCallback, useRef } from 'react';
import { ALGOLIA } from '../../consts';
import '@docsearch/css';
import './Search.css';
import  {t} from "i18next";

import { createPortal } from 'react-dom';
import * as docSearchReact from '@docsearch/react';

/** FIXME: This is still kinda nasty, but DocSearch is not ESM ready. */
const DocSearchModal =
	docSearchReact.DocSearchModal || (docSearchReact as any).default.DocSearchModal;
const useDocSearchKeyboardEvents =
	docSearchReact.useDocSearchKeyboardEvents ||
	(docSearchReact as any).default.useDocSearchKeyboardEvents;

	
export default function Search(){
	const [isOpen, setIsOpen] = useState(false);
	const searchButtonRef = useRef<HTMLButtonElement>(null);
	const [initialQuery, setInitialQuery] = useState('');

	const onOpen = useCallback(() => {
		setIsOpen(true);
	}, [setIsOpen]);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const onInput = useCallback(
		(e) => {
			setIsOpen(true);
			setInitialQuery(e.key);
		},
		[setIsOpen, setInitialQuery]
	);

	
	useDocSearchKeyboardEvents({
		isOpen,
		onOpen,
		onClose,
		onInput,
		searchButtonRef,
	});

	//i18next.changeLanguage("en"); //TODO, the parameter lang isn't being loaded properly

	const searchPrompt = t("searchButton", "Search");

	//<!--<span>{interpolate("searchButton", "Search")}</span> -->


	//const translations  = {}//;i18next.t("search", {returnObjects: true});
	
	// {
	// 	search: {
	// 		button: {
	// 			buttonText: 'Search',
	// 			buttonAriaLabel: 'Search',
	// 		},
	// 		modal: {
	// 		searchBox: {
	// 			resetButtonTitle: 'Clear the query',
	// 			resetButtonAriaLabel: 'Clear the query',
	// 			cancelButtonText: 'Cancel',
	// 			cancelButtonAriaLabel: 'Cancel',
	// 		},
	// 		startScreen: {
	// 			recentSearchesTitle: 'Recent',
	// 			noRecentSearchesText: 'No recent searches',
	// 			saveRecentSearchButtonTitle: 'Save this search',
	// 			removeRecentSearchButtonTitle: 'Remove this search from history',
	// 			favoriteSearchesTitle: 'Favorite',
	// 			removeFavoriteSearchButtonTitle: 'Remove this search from favorites',
	// 		},
	// 		errorScreen: {
	// 			titleText: 'Unable to fetch results',
	// 			helpText: 'You might want to check your network connection.',
	// 		},
	// 		footer: {
	// 			selectText: 'to select',
	// 			selectKeyAriaLabel: 'Enter key',
	// 			navigateText: 'to navigate',
	// 			navigateUpKeyAriaLabel: 'Arrow up',
	// 			navigateDownKeyAriaLabel: 'Arrow down',
	// 			closeText: 'to close',
	// 			closeKeyAriaLabel: 'Escape key',
	// 			searchByText: 'Search by',
	// 		},
	// 		noResultsScreen: {
	// 			noResultsText: 'No results for',
	// 			suggestedQueryText: 'Try searching for',
	// 			reportMissingResultsText: 'Believe this query should return results?',
	// 			reportMissingResultsLinkText: 'Let us know.',
	// 		}
	// 	}
	// }
	
	return (
		<>
			<button type="button" ref={searchButtonRef} onClick={onOpen} className="search-input">
				<svg width="24" height="24" fill="none">
					<path
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<span>{searchPrompt}</span>
				
				<span className="search-hint">
					<span className="sr-only">Press </span>

					<kbd>/</kbd>

					<span className="sr-only"> to search</span>
				</span>
			</button>

			{isOpen &&
				createPortal(
					<DocSearchModal
						initialQuery={initialQuery}
						initialScrollY={window.scrollY}
						onClose={onClose}
						indexName={ALGOLIA.indexName}
						appId={ALGOLIA.appId}
						//translations={translations}
						apiKey={ALGOLIA.apiKey}
						transformItems={(items) => {
							return items.map((item) => {
								// We transform the absolute URL into a relative URL to
								// work better on localhost, preview URLS.
								const a = document.createElement('a');
								a.href = item.url;
								const hash = a.hash === '#overview' ? '' : a.hash;
								return {
									...item,
									url: `${a.pathname}${hash}`,
								};
							});
						}}
					/>,
					document.body
				)}
		</>
	);
}
