import React from 'react';

const MainComponent = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-gray-900 to-black">
      <div className="relative flex items-center justify-center w-full h-full">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className={`absolute w-12 h-12 rounded-[90%_95%_85%_105%] bg-green-500 mix-blend-screen filter animate-wobble`}
            style={{
              '--x': `${-50 - (index * 5)}%`,
              '--y': `${-50 - (index * 5)}%`,
              '--t': `${37 + (index * 5)}`,
            }}
          >
            {/* This is where you can add any content inside the circle */}
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainComponent;
