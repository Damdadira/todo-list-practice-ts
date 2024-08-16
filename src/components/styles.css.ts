import { globalStyle, style } from '@vanilla-extract/css';

export const TodoTemplateBlock = style({
  width: '512px',
  height: '768px',
  position: 'relative',
  background: 'white',
  borderRadius: '16px',
  boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.04)',
  margin: '0 auto',
  marginTop: '96px',
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