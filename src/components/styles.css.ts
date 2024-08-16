import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { styled } from '@dessert-box/react';

export const TodoTemplateBlock = style({
  width: '512px',
  height: '768px',
  position: 'relative',
  background: 'white',
  borderRadius: '16px',
  boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.04)',
  margin: '0 auto',
  marginTop: '66px',
  marginBottom: '32px',
  display: 'flex',
  flexDirection: 'column'
})

export const TodoHeadBlock = style({
  padding: '48px 32px 24px 32px',
  borderBottom: '1px solid #e9ecef',
})

//ver.1
// globalStyle(`${TodoTemplateBlock} h1`,{
//   margin: 0,
//   fontSize: '36px',
//   color: '#343a40',
// })

//ver.2
export const h1 = style({
  margin: 0,
  fontSize: '36px',
  color: '#343a40',
})

export const day = style({
  // day 적용할 스타일
  selectors: {
    [`${TodoTemplateBlock} &`]: {
      marginTop: '4px',
      color: '#868e96',
      fontSize: "21px"
    }
  }
})

export const tasksLeft = style({
  color: '#20c997',
  fontSize: '18px',
  marginTop: '40px',
  fontWeight: 'bold'
})

export const TodoListBlock = style({
  flex: 1,
  padding: '20px 32px',
  paddingBottom: '48px',
  overflowY: 'auto',
  color: 'black'
})

export const TodoItemBlock = style({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 0',
})

export const Remove = style({
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#dee2e6',
  fontSize: '24px',
  cursor: 'pointer',
  ":hover":{
    color: '#ff6b6b',
  },
  selectors:{
    [`${TodoItemBlock}:hover &`]: {  
      display: 'flex',
    }}
})

export const CheckCircle = recipe({
  base: {
    width: '32px',
    height: '32px',
    borderRadius: '16px',
    border: '1px solid #ced4da',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    cursor: 'pointer',
  },

  variants: {
    done: {
      true: { 
        border: '1px solid #38d9a9', 
        color: '#38d9a9' 
      }
    }
  }
});

export const Text = recipe({
  base: {
    flex: 1,
    fontSize: '21px',
    color: '#495057',
  },

  variants: {
    done: {
      true: { color: '#ced4da' }
    }
  }
})

export const CircleButton = recipe({
  base: {
    background: '#38d9a9',
    ":hover":{
      background: '#63e6be'
    },
    ":active":{
      background: '#20c997'
    },
    zIndex: 5,
    cursor: 'pointer',
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '60px',
    position: 'absolute',
    left: '50%',
    bottom: '0px',
    transform: 'translate(-50%, 50%)',
    color: 'white',
    borderRadius: '50%',
    border: 'none',
    outline: 'none',
    transition: '0.125s all ease-in'
  },

  variants: {
    open: {
      true: {
        background: '#ff6b6b',
        ":hover":{
          background: '#ff8787',
        },
        ":active":{
          background: 'fa5252'
        },
        transform: 'translate(-50%, 50%) rotate(45deg)'
      }
    }
  }
})

export const InsertFormPositioner = style({
  width: '100%',
  bottom: 0,
  left: 0,
  position: 'absolute'

})

export const InsertForm = styled('form',{
  background: '#f8f9fa',
  padding: '32px 32px 72px 32px',
  borderBottomLeftRadius: '16px',
  borderBottomRightRadius: '16px',
  borderTop: '1px solid #e9ecef'
})

export const Input = styled('input',{
  padding: '12px',
  borderRadius: '4px',
  border: '1px solid #dee2e6',
  width: '94%',
  outline: 'none'
})