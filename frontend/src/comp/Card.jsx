import Modal from './Modal'; 

const Card = (props) => { 
    return <Modal onClose={props.onClose}>
         
          
            <img src={props.src}/>
          
    </Modal>
}

export default Card;