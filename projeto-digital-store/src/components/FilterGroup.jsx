import React from 'react'

function FilterGroup() {
  return (
    <div>
      Filtrar por
      <hr />
      <form>
        <fieldset>
          <legend>
            Marka
          </legend>
          <div>
            <input type='checkbox'></input>
            <label>
              Adiddas
            </label>
            <input type='checkbox'></input>
            <label>
              Calendiaga
            </label>
            <input type='checkbox'></input>
            <label>
              Nike
            </label>
            <input type='checkbox'></input>
            <label>
              Puma
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            Categoria
          </legend>
          <div>
            <input type='checkbox'></input>
            <label>
              Esporte e lazer
            </label>
            <input type='checkbox'></input>
            <label>
              Casual
            </label>
            <input type='checkbox'></input>
            <label>
              Utilitário
            </label>
            <input type='checkbox'></input>
            <label>
              Corrida
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            Gênero
          </legend>
          <div>
            <input type='checkbox'></input>
            <label>
              Masculino
            </label>
            <input type='checkbox'></input>
            <label>
              Feminino
            </label>
            <input type='checkbox'></input>
            <label>
              Unissex
            </label>
          </div>
          <fieldset>
          <legend>
            Marka
          </legend>
          <div>
            <input type='radio' name='estado'></input>
            <label>
              Novo
            </label>
            <input type='radio' name='estado'></input>
            <label>
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
