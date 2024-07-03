import { Layout } from 'antd';

function Menu() {
  return (
    <Layout.Header class="flex items-center justify-center min-h-16 bg-black">
      <a class="text-white me-8">Home</a>
      <a class="text-white me-8">Produtos</a>
      <a class="text-white me-8">Contato</a>
    </Layout.Header>
  );
}

export default Menu;
