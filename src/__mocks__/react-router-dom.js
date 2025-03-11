// src/__mocks__/react-router-dom.js
export const useNavigate = jest.fn();
export * from 'react-router-dom';


const actual = jest.requireActual('react-router-dom');

module.exports = {
    ...actual,
    useNavigate: jest.fn(),
};