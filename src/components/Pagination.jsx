import Pagination from 'react-bootstrap/Pagination';
import '../style/pagination.css'
function AdvancedExample() {
  return (
<div className='pagination'>
<Pagination className='pag bg-dark '>
        <button onClick={()=>getprev()} > Next </button>
      <Pagination.Item>{1}</Pagination.Item>

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>

      <button  onClick={()=>getnext()}> Next </button>
    </Pagination>
</div>
  );
}

export default AdvancedExample;