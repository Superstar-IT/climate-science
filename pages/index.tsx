import classNames from 'classnames'
import type { NextPage } from 'next'
import ListItem from '../components/ListItem'
import { AnswerInterface } from '../interfaces/answer.interface'
import homeStyles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const answers: AnswerInterface[] = [
    {
      content: 'Electricity is measured in units called watts',
      selected: false,
    },
    {
      content: 'Electricity flows at the speed of light',
      selected: false,
    },
    {
      content: 'Electricity is a primary energy source',
      selected: true,
    }
  ];

  return (
    <div className={homeStyles.container}>
      <main className={homeStyles.main}>
        <div className={homeStyles.grid}>
          <div className={classNames(homeStyles.card, 'bordered')}>
            <h2 className={classNames('text-center mx-auto mt-0', homeStyles.title)}>Which of the below statements about electricity is not true?</h2>
            { answers.map((answer, index) => 
              <ListItem key={index} item={answer} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
