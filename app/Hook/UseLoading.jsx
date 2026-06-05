import React from 'react';

const UseLoading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-amber-50">
            <div className="text-center space-y-3">

                <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto"></div>

                <p className="text-amber-700 font-medium">
                    Loading...
                </p>

            </div>
        </div>
    );
};

export default UseLoading;