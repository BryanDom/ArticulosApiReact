import { Modal } from 'semantic-ui-react';

export const ModalBasic = (props) => {
  const { show, size, title, children, onClose } = props;

  return (
    <Modal
      open={show}
      onClose={onClose}
      size={size}
      style={{ 
        marginTop: 'auto', 
        marginBottom: 'auto', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'fit-content',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-40%)'
      }}
    >
      {title && <Modal.Header>{title}</Modal.Header>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

ModalBasic.defaultProps = {
  size: "tiny",
};
