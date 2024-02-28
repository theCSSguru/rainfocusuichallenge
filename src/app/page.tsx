import React from 'react';
import { Header } from '@/components/Header/Header';
import { Settings } from '@/components/Settings/Settings';

export default function Home() {
  return (
    <div className="rf">
      <Header />
      <Settings />
    </div>
  );
}
