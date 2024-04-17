import { useForm } from 'react-hook-form';
import './subscribe.styles.scss';

const Subscribe = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (values) => alert(JSON.stringify(`Danke fürs Abonnieren ${values.email}`, null, 2));

    return(
        
        <div className='subscribe'>
            <h2>UPDATES & MEHR</h2>
            <h4>Mit der Newsletter bleiben Sie informiert</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    id='subscription-email'
                    type="email"
                    placeholder="E-Mail Adresse"
                    autoComplete="email"
                    {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                />
                {errors.email && <span>Invalid email</span>}

                <button type="submit">Abonnieren</button>
            </form>
        </div>
    )
}

export default Subscribe;