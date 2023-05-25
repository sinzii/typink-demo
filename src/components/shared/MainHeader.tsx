import { Box } from '@chakra-ui/react';
import React from 'react';
import NetworkSelection from '@/components/shared/NetworkSelection';

export default function MainHeader() {
  return (
    <Box borderBottom={1} borderStyle='solid' borderColor='gray.200'>
      <Box maxWidth={600} mx='auto' display='flex' justifyContent='space-between' alignItems='center' gap={4} h={16}>
        <img src='/coong-dapp-logo.svg' alt='Coong Dapp Logo' height='32' />
        <NetworkSelection />
      </Box>
    </Box>
  );
}
