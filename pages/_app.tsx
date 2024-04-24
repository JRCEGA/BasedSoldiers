import "@/styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import {
  RainbowKitProvider,
  getDefaultWallets,
  Locale,
  darkTheme,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { WagmiProvider } from 'wagmi';
import {
  base
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const { wallets } = getDefaultWallets();

const config = getDefaultConfig({
  appName: 'Based Soldiers',
  projectId: '8261c63280dd335f76c0502e938e4342',
  wallets: [
    ...wallets,
    {
      groupName: 'Other',
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [base] : []),
  ],
  ssr: true,
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter() as { locale: Locale };
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" theme={darkTheme()} locale={locale}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
