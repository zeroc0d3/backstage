/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A module for the search backend that implements search using ElasticSearch
 *
 * @packageDocumentation
 */

export { default } from './module';
export * from './module';
export {
  decodeElasticSearchPageCursor,
  ElasticSearchSearchEngine,
  isOpenSearchCompatible,
} from './engines';
export type {
  BaseElasticSearchClientOptions,
  ElasticSearchAgentOptions,
  ElasticSearchAliasAction,
  ElasticSearchClientWrapper,
  ElasticSearchConcreteQuery,
  ElasticSearchClientOptions,
  ElasticSearchElasticSearchClientOptions,
  ElasticSearchHighlightConfig,
  ElasticSearchQueryConfig,
  ElasticSearchHighlightOptions,
  ElasticSearchIndexAction,
  ElasticSearchQueryTranslator,
  ElasticSearchQueryTranslatorOptions,
  ElasticSearchConnectionConstructor,
  ElasticSearchTransportConstructor,
  ElasticSearchNodeOptions,
  ElasticSearchOptions,
  ElasticSearchAuth,
  ElasticSearchSearchEngineIndexer,
  ElasticSearchSearchEngineIndexerOptions,
  ElasticSearchCustomIndexTemplate,
  ElasticSearchCustomIndexTemplateBody,
  OpenSearchAuth,
  OpenSearchConnectionConstructor,
  OpenSearchElasticSearchClientOptions,
  OpenSearchNodeOptions,
} from './engines';
