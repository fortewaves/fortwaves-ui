export const Button = ({title}) => (
    <button style={{
        width:'100%',
        backgroundColor:'black',
        color:'white',
        padding:'.7rem 1rem',
        border:'none',
        borderRadius:'.3rem'
    }}>{title}</button>
)

export const Btn = ({icon, title}) => (
    <button style={{
        backgroundColor:'black',
        color:'white',
        padding:'.7rem 1.5rem',
        border:'none',
        borderRadius:'.3rem',
        display:'flex',
        alignItems:'center',

    }}>{icon?icon():null} <p style={{marginLeft:'.5rem'}}>{title}</p></button>
)


