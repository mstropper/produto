import React, { useState } from 'react';
import { Card, Modal } from 'antd';

function Produto({ produtos }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState(null);

  const handleCardClick = (produto) => {
    setSelectedProduto(produto);
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      {produtos.map((produto) => (
        <Card
          key={produto.id}
          bordered={true}
          cover={<img alt={produto.nome} src={produto.imagem} />}
        //   style={{ width: 290, maxHeight: 350, marginTop: 5, marginLeft: 5, backgroundColor: 'black' }}
          className="w-72 max-h-80 mt-2 ml-2 mr-1 bg-black"
          onClick={() => handleCardClick(produto)}
        >
          <p className="text-white font-medium">{produto.nome}</p>
          <p className="text-white font-medium">Valor: R${produto.valor}</p>
        </Card>
      ))}

      {selectedProduto && (
        <Modal
          title="Detalhes do Produto"
          open={modalVisible}
          onCancel={handleModalCancel}
          footer={null}
        >
          <div>
            <img alt={selectedProduto.nome} src={selectedProduto.imagem} className="max-w-full rounded" />
            <p className="text-center font-medium mt-2">Nome: {selectedProduto.nome}</p>
            <p className="text-center font-medium mt-2">Valor: R${selectedProduto.valor}</p>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Produto;
