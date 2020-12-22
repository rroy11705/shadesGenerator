import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Modal from 'react-modal';
import { FaInfoCircle, FaRegWindowClose } from 'react-icons/fa'
import Values from 'values.js';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

function App() {
  const [color, setColor] = useState('');
  const [shadesCount, setShadesCount] = useState(10);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(shadesCount));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(shadesCount);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f15025';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Info Modal"
      >
        <div className="modal-header">
          <h2 ref={_subtitle => (subtitle = _subtitle)}>How to use Shades Generator</h2>
          <FaRegWindowClose onClick={closeModal}>close</FaRegWindowClose>
        </div>
        <div className="modal-body">
          <p>Choose a color code hex whose shades you want and choose the number of shades you want to generate</p> 
          <p>If you have choden <strong>N</strong> number of shades, then this Shades Generator would generate <strong>N/2</strong> shades which are lighter than your chosen shade and <strong>N/2</strong> shades which are darker.</p>
        </div>
      </Modal>
      <section className='container'>
        <div className="container-form">
          <h3>Shades Generator</h3>
          <form onSubmit={handleSubmit}>
            <input
              type = 'text'
              value = {color}
              onChange = {(e) => setColor(e.target.value)}
              placeholder = 'Color Code (#f15025)'
              className = {`${error ? 'error' : null}`}
            />
            <input
              type = 'number'
              placeholder = 'Number of Shades (20)'
              onChange = {(e) => setShadesCount(200 / e.target.value || 10)}
              className = {`${error ? 'error' : null}`}
            />
            <button type='submit' className='btn'>
              submit
            </button>
          </form>
        </div>
        <div className="container-info">
          <FaInfoCircle onClick={openModal}>
          </FaInfoCircle>
        </div>
      </section>
      <section className='colors'>
        {list.map((shade, index) => {
          return <SingleColor key = {index} {...shade} />;
        })}
      </section>
    </>
  );
}

export default App;
