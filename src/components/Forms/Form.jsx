//Aqui crearemos los formularios de login y logout con sus validaciones y gestión de datos


import {useForm} from "react-hook-form";

//Este hook nos lo traemos de react-hook-form
//Como todos los hooks, devuelve una serie de herramientas para trabajar
//Nos traemos de la libreria las que vamos a usar,
//en este caso register, handleSubmit,etc...hay muchas mas

function Form () {
  const {
    register,
    handleSubmit,
    formState:{ errors}
  } = useForm ();

//Dentro de useForm podriamos meter valores por defecto
//   {defaultValues: {
//     firstName: '',
//     lastName: '',

//     }
// }

  const onSubmit = (data) =>{
    //Aqui procesamos los datos del formulario
    console.log("data", data);
  };

  return (
    <form onSubmit = {handleSubmit(onSubmit)}>

      <div>
        <label htmlFor="name">Nombre</label>
        <input 
          type="text"
          id="name"
          {...register("name", {
            required: true, 
            min: {
              value: 2,
              message: 'Error'
            }
          }
        )} placeholder="Nombre"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="surname">Apellidos</label>
        <input 
          type="text"
          id="surname"
          {...register("surname", {
            required: true, 
            min: {
              value: 2,
              message: 'Error'
            }
          }
        )} placeholder="Apellidos"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="birth">Fecha de nacimiento</label>
        <input 
          type="text"
          id="birth"
          {...register("birth", {
              valueAsDate: true,
          }
        )} placeholder="Fecha de nacimiento"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          {...register("email", {
            required: "El correo electronico es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Formato de correo electrónico no válido",
            },
          })} placeholder="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>
        <input 
          type="text"
          id="password"
          {...register("password", {
            required: true, 
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: "Contraseña no válida",
            },

          }
        )} placeholder="Contraseña"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <button type='submit'>Submit</button>
    
    </form>
  )
}

export default Form

