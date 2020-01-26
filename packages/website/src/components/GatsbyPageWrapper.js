import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function GastbyWrapPageElement({ element, props }) {
    return (
        <ErrorBoundary>
            {element}
        </ErrorBoundary>
    );
}
  
export default GastbyWrapPageElement;