import React, { type ReactNode } from 'react';
import { Container, Wrapper } from 'shared/ui';
import { Header } from 'widgets/Header';

import cls from './styles.module.scss';

interface LayoutProps {
    children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => (
    <div className={cls.layout}>
        <Container className="page-container">
            <Wrapper className={cls.headerWrapper}>
                <Header />
            </Wrapper>
        </Container>

        {/* <Wrapper className={cls.glowWrapper} position="absolute"> */}
        {/*    <Glow /> */}
        {/* </Wrapper> */}

        {children}
    </div>
);
