import React from 'react'
import '../styles/FilterGroup.scss'


function FilterGroup() {
  return (
    <div className='filter-group'>
      <h2 className='filtrar-por'>
        Filtrar por
      </h2>
      <hr className='barra' />
      <form>
        <fieldset>
          <legend className='titulo-grupo'>
            Marka
          </legend>
          <div className='grupo-1'>
            <label>
              <input type='checkbox' className='input-checkbox'></input>
              Adiddas
            </label>
            <label>
              <input type='checkbox'></input>
              Calendiaga
            </label>
            <label>
              <input type='checkbox'></input>
              Nike
            </label>
            <label>
              <input type='checkbox'></input>
              Puma
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend className='titulo-grupo'>
            Categoria
          </legend>
          <div className='grupo-2'>
            <label>
              <input type='checkbox'></input>

              Esporte e lazer
            </label>
            <label>
              <input type='checkbox'></input>

              Casual
            </label>
            <label>
              <input type='checkbox'></input>

              Utilitário
            </label>
            <label>
              <input type='checkbox'></input>

              Corrida
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend className='titulo-grupo'>
            Gênero
          </legend>
          <div className='grupo-3'>
            <label>
              <input type='checkbox'></input>
              Masculino
            </label>
            <label>
              <input type='checkbox'></input>

              Feminino
            </label>
            <label>
              <input type='checkbox'></input>

              Unissex
            </label>
          </div>
          <fieldset>
            <legend className='titulo-grupo'>
              Marka
            </legend>
            <div className='grupo-4'>
              <label>
                <input type='radio' name='estado'></input>

                Novo
              </label>
              <label>
                <input type='radio' name='estado'></input>

                Usado
              </label>
            </div>
          </fieldset>
        </fieldset>


      </form>
    </div>
  )
}

export default FilterGroup
