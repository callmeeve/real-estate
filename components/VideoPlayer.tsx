'use client';

import { useRef } from 'react';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import '@vidstack/react/player/styles/base.css';

interface VideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  const playerRef = useRef(null);

  return (
    <div className="flex justify-center my-12">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-4">
          <MediaPlayer
            ref={playerRef}
            src={url}
            controls
            className="w-full h-auto rounded"
            style={{ width: 500, height: 300 }}
          >
            <MediaProvider />
          </MediaPlayer>
        </div>
      </div>
    </div>
  );
}