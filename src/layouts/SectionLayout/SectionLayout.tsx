import React from 'react';

type SectionLayoutProps = {
  children: React.ReactNode
}
const SectionLayout = ({ children }: React.PropsWithChildren<SectionLayoutProps>) => (
  <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      {children}
    </div>
  </section>
)

export default SectionLayout;