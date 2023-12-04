import { useState } from "react";
import { ExploreContainer, TagsContainer } from "@/styles/pages/explore";
import { NextPageWithLayout } from "./_app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { PageTitle } from "@/components/PageTitle";
import { Binoculars } from "@phosphor-icons/react/dist/ssr";
import { Input } from "@/components/ui/Form/Input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Tag } from "@/components/ui/Tag";

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState("");

  return (
    <ExploreContainer>
      <header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />
        <Input
          placeholder="Buscar livro ou autor"
          icon={<MagnifyingGlass size={20} />}
          css={{ maxWidth: 433 }}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </header>

      <TagsContainer>
        <Tag active>Todos</Tag>
        <Tag>Computação</Tag>
      </TagsContainer>
    </ExploreContainer>
  );
};

ExplorePage.getLayout = (page) => {
  return (
    <div>
      <DefaultLayout title="Explorar">{page}</DefaultLayout>
    </div>
  );
};

export default ExplorePage;
