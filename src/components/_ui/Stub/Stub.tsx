import empty from './empty.svg';

export const Stub = () => {
    return (
        <div style={{width: '100%', height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={empty} alt="Empty" width={200}/>
        </div>
    );
};
