import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex gap-4'>
        <div className="form-control items-center gap-2 flex-row">
            <label className="label gap-2 cursor-pointer">
                <span className='label-text'>Male</span>
            </label>
            <input type="checkbox" className="checkbox border-slate-900" />
        </div>
        <div className="form-control items-center gap-2 flex-row">
            <label className="label gap-2 cursor-pointer">
                <span className='label-text'>Female</span>
            </label>
            <input type="checkbox" className="checkbox border-slate-900" />
        </div>

    </div>
  )
}

export default GenderCheckBox