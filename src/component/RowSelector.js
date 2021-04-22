import React from 'react'

const RowSelector = (setterperpage) => {
    return (
        <div className='box'>
             <label>No of rows:</label>
          <select class="form-control" placeholder="Select the order" aria-label=".form-select-lg example" onChange={setterperpage} >
            <option value="10">10</option>
            <option value="20">20</option>
            </select>
        </div>
    )
}

export default RowSelector
