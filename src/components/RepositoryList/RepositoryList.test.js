import React from 'react'
import { render } from '@testing-library/react-native'
import { RepositoryListUI } from './RepositoryList.jsx'
import { expect } from '@jest/globals'

describe('RepositoryList', () => {
  describe('RepositoryListUI', () => {
    it('renders repository info correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const parsedRepositories = repositories.edges.map(({ node }) => node)

      const { getAllByTestId } = render(<RepositoryListUI repositories={parsedRepositories} />)

      const repositoryNames = getAllByTestId('RepositoryItemName')
      const repositoryDescriptions = getAllByTestId('RepositoryItemDescription')
      const repositoryLanguages = getAllByTestId('RepositoryItemLanguage')

      repositories.edges.forEach((repository, index) => {
        expect(repositoryNames[index]).toHaveTextContent(repository.node.fullName)
        expect(repositoryDescriptions[index]).toHaveTextContent(repository.node.description)
        expect(repositoryLanguages[index]).toHaveTextContent(repository.node.language)
      })
    })
  })
})