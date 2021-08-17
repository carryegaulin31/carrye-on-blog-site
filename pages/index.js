import DataList from '../components/DataList';
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default function Home({data}) {
  return (
    <div>
      <DataList data={data} />
        </div>
      );
}

export async function getServerSideProps() {
     const posts = await prisma.post.findMany();

  return {
    props: {
      data: posts,
    },
  };
}