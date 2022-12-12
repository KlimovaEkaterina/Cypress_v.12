
describe('Searh', () => {
    it('Product search in different methods', () => {
      cy.visit('https://zdravcity.ru/')         
      cy.get('.sc-44235671-3 > .Button_button__4em_S').click() 
      cy.wait(2000)
      cy.get('.TextField_text-field-input__OMhtf').type('Аримидекс')
      cy.wait(2000)       
      //cy.get('.TextField_text-field-input__OMhtf').type('Аримидекс{enter}') 
      cy.contains('Аримидекс')
      cy.get('.sc-ec123465-14 > .Button_button__4em_S').click()
      cy.wait(2000)
      cy.get('.sc-ec123465-15 > .Counter_counter__Kb4T9 > [aria-label="Увеличить на один. Текущее количество 1"]').click()
      cy.wait(2000)
      cy.get('.sc-ec123465-15 > .Counter_counter__Kb4T9 > [aria-label="Уменьшить на один. Текущее количество 2"]').click()
      cy.wait(2000)
      cy.get('.sc-ec123465-15 > .Counter_counter__Kb4T9 > .Counter_counter-field__gEiFM').type('{backspace}2{enter}')
      cy.wait(2000)
      cy.visit('https://zdravcity.ru/cart/')
      //cy.contains('Аримидекс')
      cy.get('.goods__title')
      .should('include.text','Аримидекс')
      cy.get('.count__input')
      .should('have.value', '2')    
      cy.get('.icon-plus').click()
      cy.get('.count__input').type('{backspace}4{enter}')     
      cy.get('.count__btn > .icon-minus').click()
      //cy.wait(2000)   
      cy.get('#find_mobile > .search__input-box > .search__input').type('Пролиа')     
      //cy.wait(2000)  
      //cy.get('.sc-38a13369-0 > .TextField_text-field__bumkf > .TextField_text-field-wrap__iqiLJ > .TextField_text-field-prefix__s_cNF').click()
      cy.contains('Пролиа') 
      cy.visit('https://zdravcity.ru/p_prolia-r-r-p-k-vved-60-mg-ml-shpric-s-zaschit-ustr-igly-1ml-n1-0088422.html/')      
      cy.contains('Добавить в корзину').first().click() 
      cy.get('.sc-a6cd743c-11 > .Counter_counter__Kb4T9 > [aria-label="Увеличить на один. Текущее количество 1"]').click()
      cy.wait(2000)
      cy.get('.sc-a6cd743c-11 > .Counter_counter__Kb4T9 > [aria-label="Уменьшить на один. Текущее количество 2"]').click()
      cy.wait(2000)
      cy.get('.sc-a6cd743c-11 > .Counter_counter__Kb4T9 > .Counter_counter-field__gEiFM').type('{backspace}2{enter}')
      cy.wait(2000)
      cy.visit('https://zdravcity.ru/cart/')  
      cy.get('[type="checkbox"]').eq(2).uncheck({force: true})
      cy.contains('Удалить выбранные').click() 
      cy.get('.active > .modal__wrap > .modal__box > .modal__button--background').click({force: true})
      cy.contains('Очистить корзину').click() 
      cy.get('.active > .modal__wrap > .modal__box > .modal__button--background').click({force: true}) 
      cy.get('.not-found__title')
      .should('include.text','Корзина пока пуста')
      })
    })
     