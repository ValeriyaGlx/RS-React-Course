import { NextRouter, Router } from 'next/router';
import { BaseRouter } from 'next/dist/shared/lib/router/router';

const createMockRouter = (router: Partial<NextRouter>): NextRouter => {
  return <
    BaseRouter &
      Pick<
        Router,
        | 'push'
        | 'replace'
        | 'reload'
        | 'back'
        | 'forward'
        | 'prefetch'
        | 'beforePopState'
        | 'events'
        | 'isFallback'
        | 'isReady'
        | 'isPreview'
      >
  >{
    query: {},
    asPath: '/',
    route: '/',
    pathname: '/',
    push: jest.fn(),
    ...router,
  };
};

export default createMockRouter;
