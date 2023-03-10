import { useEffect, useState } from "react"
import FileViewer from "../../../components/FileViewer"
// import FileViewer from "../../components/FileViewer"


const CreateCustomizes = ({ handleValues, loading, customizes, products, onSubmit }) => {

    return (
        <>
            <div className="df row column flex-1  row-center">
                <h1 className="df mt-3 bold-500 h1 mb-6">Create Customizes</h1>
                <span className="h3 text-danger">{handleValues('get', 'err')}</span>
                <form onSubmit={onSubmit} action="" className="df p-relative container-small column pl-1 mb-4 pr-1 pt-4 overflow-y-scroll flex-1">

                    <input
                        value={handleValues('get', 'name')}
                        onChange={e => {
                            handleValues('set', 'name', e.target.value)
                        }}
                        disabled={loading}
                        placeholder='Enter name'
                        type={'name'}
                        name='name'
                        className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 '
                        id=''
                    />



                    <label className="h2 mt-5" htmlFor="">Parent Category</label>

                    <select className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 ' name="colos" value={handleValues('get', 'parent_id')}
                        onChange={e => {
                            handleValues('set', 'parent_id', e.target.value)
                        }} id="">
                        <option className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 ' value={''}>No Parent category</option>
                        {customizes && customizes.map((customize, index) => <option className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 ' value={index} key={index}>{customize.name}</option>)}
                    </select>

                    <label className="h2 mt-5" htmlFor="">Product </label>

                    <select disabled={handleValues('get', 'parent_id') !== ''} className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 ' name="colos" value={handleValues('get', 'product_id')}
                        onChange={e => {
                            handleValues('set', 'product_id', e.target.value)
                        }} id="">
                            <option value="">Select products</option>
                        {products && products.map((product, index) => <option className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 ' selected={index==handleValues('get', 'product_id')} value={index} key={index}>{product.name}</option>)}
                    </select>
                    <FileViewer
                        // onDelete={onDeleteLogo}
                        onChangeFile={(files) => { handleValues('set', 'image', files[0]) }}
                        label={'Image'}
                        single={true}
                        id='product_image'
                        defaultFiles={
                            []
                        }
                    />

                    <button
                        disabled={loading}
                        className='df row sticky-bottom mt-2  center bg-dark p-5 text-light h2 pointer'
                    >
                        {loading ? "Loading..." : 'Submit'}
                    </button>
                </form>

            </div>
        </>
    )
}
export default CreateCustomizes