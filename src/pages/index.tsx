import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
const index: FC = () => {
    return (
        <>
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                <h1 className='text-5xl text-white mb-10'> بازی دور</h1>
                <div className='centerImage space-y-6 h-[400px] w-[400px] flex flex-col justify-center items-center rounded-lg'>
                    <button className='flex justify-center items-center flex-col'>
                        <h2 className='text-black text-2xl font-bold'>
                            ...انفرادی به زودی
                        </h2>
                        <div className='w-52 h-16 rounded-xl justify-evenly p-3 flex items-center bg-slate-500'>
                            <Image
                                width={44}
                                height={44}
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiUlEQVR4nO2Vz2tTQRDHn1p/gHrxKHpSUCMqzUxC9RLoX1DQGPFQxIOCHsSD3tRbT1UQf4AoVFP7ZvpOglgsFIqCnvQioiBITWcTkZbcerHVyLx9jybv5SWxwZMZ2MvO7PezOzuz6zg969l/bbWas04YzgvheyFcEsYFw3i75uU3/FOwEI4axlpsEH4wDPmuAfPewA5hmNFTGYaizpUI9gjjr6ZgO36W3P6dGmsYJ2xGYEa1OoIaxlOGsRIKCuMdfzMEp1tA7ZjEszYzcK9uvmwICy2hX6b2bjaM1cY0woi/IcIr7cBlhqs2FkYivupHL7UpESycPRIXtKkuMwx1AB6yWYNi1DfvwaFEcMnNYHSBMNz9W7Aw3o/6Sm4GE8ELz45tF4KVCHgsSHWh7R0HlS2Ejxs0CJZVu9WJDzYRLL97ABtrN5z1huBpIpRgXGP0LuuLMxwVL5tKBCtAGD/H0k04qv4K9R+wLRbzLxkP9yX1ujB+Uu1EcFAY+bgwLMt4dpe9PxhuUgfDwXXs1tgm4ONOO/NTyjAVeZle6nPpg930YEzYTQ+uPqk4HVn7QjXbgv2du3gx2Ok3Q5kztdlcn87/8FLbYsI2blp9Pnw216dr/LXWf6EzqJc5agiMIXzyvXh4q85pwQjhOSEsJRWX+jQmfCh0rd/PBEY4PZAIrHhpEIbnQvjbED4MU2smMydbAZttIGyrIPWPVFO1ldF4SsLrq/0LX/Xp1EWG8VanwCbpv6kac2O5LcIwFxTpiiG4Vv8p1O/4ki0iOLFWaLSaxYXLkYIr6E/ytn6yPAH7/WDG192CDcEre43ZVKT93jjR3ygsKCFY7PrEBIthN5hGX7WjSu9Zz5w12B8pcvYKg2Gx2AAAAABJRU5ErkJggg=='
                                alt='group'
                            />
                            <h2 className='text-white font-black text-3xl'>
                                VS
                            </h2>
                            <Image
                                width={36}
                                height={36}
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACd0lEQVR4nO2ZTYhNcRTADxLJxkiyRSkh3jkvUwpJWFgaNmyUna0slMlHKTULTRZYzIL3znl3MQuLyVoISfmYaBqZ9855ExpqsjGe3tV9ZXzMR/fde73/n+6vzvp/fv3P+X8C5OTkOKFaorXKdEyFLirjVRO6Yoxn6oI7whAWgO/UGfeZ0EMTCucKZbpXC7q7wFdM6JIyNeeT+EWmaozXtbxtC/hEnfFkHIFZ4qtV6Dj4QLW0eYUKTiYUCZWxURPa5NoDtEJHk0pMB9MNH3qjlFZEGV+79gBjepSByLeRofVL3IoIjqQuLaHwfbBxuWMRGs1CpH4blzkVUcYHqUtLcBJcY4KDGYg8de0BKnguvQj1u/YA48LB1CJlPOTaA+qChbQi40EBfdhH7qRftXDIh2Z/mVqE8YVrD1CmcgYit1x7RBvi3rj3kFkbnamp5cIe8IFauXggqUhNCvvBJ0zwTQKRUfANFepru6yE+sA3qozrjGkqfm9gwwLaAD6iTBf+6dn4QfRmFWdfUaGxMOhZBD5jMW6MyjgMvmOMj2PMyCvwHWUcjrEJVsFnnlzDxcr0IYbI57cDu5aCr5hQb/xVCy+Db9SC7i4VHEhw5iqNB1tXuc4f3pW3rzams3HKaZ4VbEKFzo/dxDUdF6hJcWfrhZHpS1KBGcE0pYKijLv/6h9K2AsLo7u1CT3LLPm5pZ5bpXg4GjNTCZVCd0cEZKZQNHY2EpXiidYBr9MSMt1DjSiHVBLGdCTN7S87GWqaYE/iDxxj/Ohawn7GJxssrmxbRBlPe5B8+FswnWpfRPC+88TljxITutu2SGsqfRNhnGhbJCcnB/4bvgO1Q2RRjhYPPwAAAABJRU5ErkJggg=='
                                alt='user'
                            />
                        </div>
                    </button>
                    <Link
                        href={"/Games/multipleGame"}
                        className='flex justify-center items-center flex-col'
                    >
                        <h2 className='text-black text-2xl font-bold'>
                            دو به دو
                        </h2>
                        <div className='w-52 h-16 rounded-xl justify-evenly p-3 flex items-center bg-slate-500'>
                            <Image
                                width={40}
                                height={40}
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB10lEQVR4nO2VvUscURTFp7JQG0FRQTtBERTdezepI0QFrawV7AT/AjtBhBRqaWXnZuddp4xFQPwHRLHSWt37xo/KD0RXESJvd4VNdOadRCEWXrjV/Djn3fM+Jgg+6n9XnKcuK7RqhWMrdKtCuxpmBiDW8I4KfflrU2syo9Zw0Qr/+q0NX6jQ1FG+pwFgz63wdJynRtCU21Xo8plQVauQoKwV0oMo2+I1VqGFdCE3TXYSZksL5Xm/saF9r1jEnTBbnnoPiJpufEJnUXc9ypYmNnQFRM1nPqGT1d46lIWNrdBPn1AslEHZymHcBCamdZ9QIervQNmK8Tqyx9YndBz1NaHs05UKgD1e8kYd0leULe8xL3qNKxFupooZXkFZFd6ATF0Vwuxw6sSGBv+FhcoKf0sQm0VZNTSDuf1RL4m9Bfs+jdXw2IvxhTQCs4bHYMPT8HOzCs8l/GO33E8fYst80X13XKKhE1RDxhq+S3gEtuMfVIuxzxZw5/jqRT9FNWGF71Pu4rXmPrUhrKfvdY3HS6YF4awaekh/eWgZZX2thh6cjntvv/vggmSGnDHCYtFTzr23hz7wMEetpZgBFppa6CBIPJFVvRd115Qn9rPgYSvC1+yjglfWI7+5Dm48LA6IAAAAAElFTkSuQmCC'
                                alt='user-group-man-man'
                            />
                            <h2 className='text-white font-black text-3xl'>
                                VS
                            </h2>
                            <Image
                                width={40}
                                height={40}
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB10lEQVR4nO2VvUscURTFp7JQG0FRQTtBERTdezepI0QFrawV7AT/AjtBhBRqaWXnZuddp4xFQPwHRLHSWt37xo/KD0RXESJvd4VNdOadRCEWXrjV/Djn3fM+Jgg+6n9XnKcuK7RqhWMrdKtCuxpmBiDW8I4KfflrU2syo9Zw0Qr/+q0NX6jQ1FG+pwFgz63wdJynRtCU21Xo8plQVauQoKwV0oMo2+I1VqGFdCE3TXYSZksL5Xm/saF9r1jEnTBbnnoPiJpufEJnUXc9ypYmNnQFRM1nPqGT1d46lIWNrdBPn1AslEHZymHcBCamdZ9QIervQNmK8Tqyx9YndBz1NaHs05UKgD1e8kYd0leULe8xL3qNKxFupooZXkFZFd6ATF0Vwuxw6sSGBv+FhcoKf0sQm0VZNTSDuf1RL4m9Bfs+jdXw2IvxhTQCs4bHYMPT8HOzCs8l/GO33E8fYst80X13XKKhE1RDxhq+S3gEtuMfVIuxzxZw5/jqRT9FNWGF71Pu4rXmPrUhrKfvdY3HS6YF4awaekh/eWgZZX2thh6cjntvv/vggmSGnDHCYtFTzr23hz7wMEetpZgBFppa6CBIPJFVvRd115Qn9rPgYSvC1+yjglfWI7+5Dm48LA6IAAAAAElFTkSuQmCC'
                                alt='user-group-man-man'
                            />
                        </div>
                    </Link>
                    <button className='flex justify-center items-center flex-col'>
                        <h2 className='text-black text-2xl font-bold'>بازی گروهی به زودی...</h2>
                        <div className='w-52 h-16 rounded-xl justify-evenly p-3 flex items-center bg-slate-500'>
                            <Image
                                width={44}
                                height={44}
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiUlEQVR4nO2Vz2tTQRDHn1p/gHrxKHpSUCMqzUxC9RLoX1DQGPFQxIOCHsSD3tRbT1UQf4AoVFP7ZvpOglgsFIqCnvQioiBITWcTkZbcerHVyLx9jybv5SWxwZMZ2MvO7PezOzuz6zg969l/bbWas04YzgvheyFcEsYFw3i75uU3/FOwEI4axlpsEH4wDPmuAfPewA5hmNFTGYaizpUI9gjjr6ZgO36W3P6dGmsYJ2xGYEa1OoIaxlOGsRIKCuMdfzMEp1tA7ZjEszYzcK9uvmwICy2hX6b2bjaM1cY0woi/IcIr7cBlhqs2FkYivupHL7UpESycPRIXtKkuMwx1AB6yWYNi1DfvwaFEcMnNYHSBMNz9W7Aw3o/6Sm4GE8ELz45tF4KVCHgsSHWh7R0HlS2Ejxs0CJZVu9WJDzYRLL97ABtrN5z1huBpIpRgXGP0LuuLMxwVL5tKBCtAGD/H0k04qv4K9R+wLRbzLxkP9yX1ujB+Uu1EcFAY+bgwLMt4dpe9PxhuUgfDwXXs1tgm4ONOO/NTyjAVeZle6nPpg930YEzYTQ+uPqk4HVn7QjXbgv2du3gx2Ok3Q5kztdlcn87/8FLbYsI2blp9Pnw216dr/LXWf6EzqJc5agiMIXzyvXh4q85pwQjhOSEsJRWX+jQmfCh0rd/PBEY4PZAIrHhpEIbnQvjbED4MU2smMydbAZttIGyrIPWPVFO1ldF4SsLrq/0LX/Xp1EWG8VanwCbpv6kac2O5LcIwFxTpiiG4Vv8p1O/4ki0iOLFWaLSaxYXLkYIr6E/ytn6yPAH7/WDG192CDcEre43ZVKT93jjR3ygsKCFY7PrEBIthN5hGX7WjSu9Zz5w12B8pcvYKg2Gx2AAAAABJRU5ErkJggg=='
                                alt='group'
                            />
                            <h2 className='text-white font-black text-3xl'>
                                VS
                            </h2>
                            <Image
                                width={44}
                                height={44}
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiUlEQVR4nO2Vz2tTQRDHn1p/gHrxKHpSUCMqzUxC9RLoX1DQGPFQxIOCHsSD3tRbT1UQf4AoVFP7ZvpOglgsFIqCnvQioiBITWcTkZbcerHVyLx9jybv5SWxwZMZ2MvO7PezOzuz6zg969l/bbWas04YzgvheyFcEsYFw3i75uU3/FOwEI4axlpsEH4wDPmuAfPewA5hmNFTGYaizpUI9gjjr6ZgO36W3P6dGmsYJ2xGYEa1OoIaxlOGsRIKCuMdfzMEp1tA7ZjEszYzcK9uvmwICy2hX6b2bjaM1cY0woi/IcIr7cBlhqs2FkYivupHL7UpESycPRIXtKkuMwx1AB6yWYNi1DfvwaFEcMnNYHSBMNz9W7Aw3o/6Sm4GE8ELz45tF4KVCHgsSHWh7R0HlS2Ejxs0CJZVu9WJDzYRLL97ABtrN5z1huBpIpRgXGP0LuuLMxwVL5tKBCtAGD/H0k04qv4K9R+wLRbzLxkP9yX1ujB+Uu1EcFAY+bgwLMt4dpe9PxhuUgfDwXXs1tgm4ONOO/NTyjAVeZle6nPpg930YEzYTQ+uPqk4HVn7QjXbgv2du3gx2Ok3Q5kztdlcn87/8FLbYsI2blp9Pnw216dr/LXWf6EzqJc5agiMIXzyvXh4q85pwQjhOSEsJRWX+jQmfCh0rd/PBEY4PZAIrHhpEIbnQvjbED4MU2smMydbAZttIGyrIPWPVFO1ldF4SsLrq/0LX/Xp1EWG8VanwCbpv6kac2O5LcIwFxTpiiG4Vv8p1O/4ki0iOLFWaLSaxYXLkYIr6E/ytn6yPAH7/WDG192CDcEre43ZVKT93jjR3ygsKCFY7PrEBIthN5hGX7WjSu9Zz5w12B8pcvYKg2Gx2AAAAABJRU5ErkJggg=='
                                alt='group'
                            />
                        </div>
                    </button>
                </div>
                <h2 className='text-3xl text-white py-4'>1.0.0نسخه </h2>
            </div>
        </>
    );
};

export default index;
