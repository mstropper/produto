import { Layout } from 'antd';

function Footer() {
  return (
    <Layout.Footer class="text-center items-center flex justify-center min-h-16 bg-black ">
      <a class="text-white">Matheus ©{new Date().getFullYear()} Created by Matheus</a>
    </Layout.Footer>
  );
}

export default Footer;