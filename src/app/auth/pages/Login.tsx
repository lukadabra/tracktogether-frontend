import React, { useCallback } from 'react';
import { Button } from '../../common/components/Button';
import { Container } from '../../common/components/Container';
import { authDeezer, authSpotify } from '../services/AuthUseCase';

export default function Login() {
  
  const handleDeezerLogin = useCallback(() => {
    authDeezer();
  }, []);
  
  const handleSpotifyLogin = useCallback(() => {
    authSpotify();
  }, []);
  
  return (
    <>
      <Container>
        <div className='h-screen flex flex-row justify-center items-center'>
          <div className='flex flex-col flex-wrap gap-4 w-96'>
            <p className='text-xl font-bold'>Sign in</p>
            <p>You must have a premium account from Deezer or Spotify to use TrackTogether</p>
            <div className='flex flex-col flex-wrap gap-2'>
              <Button onClick={handleDeezerLogin}>Sign in with Deezer</Button>              
              <Button onClick={handleSpotifyLogin}>Sign in with Spotify</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
