// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import Adapter from 'enzyme-adapter-react-16'

import '@testing-library/jest-dom';
import chai from 'chai'
import dirtyChai from 'dirty-chai'
import createChaiJestDiff from 'chai-jest-diff'
import chaiJestSnapshot from 'chai-jest-snapshot'
import enzymeToJSON from 'enzyme-to-json/serializer'
import createChaiEnzyme from 'chai-enzyme'
import {
  configure as configureEnzyme
} from 'enzyme'
import sinonChai from 'sinon-chai'

chai.use(dirtyChai)
  .use(createChaiJestDiff())
  .use(chaiJestSnapshot)
  .use(createChaiEnzyme())
  .use(sinonChai)

expect.addSnapshotSerializer(enzymeToJSON)

configureEnzyme({
  adapter: new Adapter()
})