import styled from 'styled-components'

export const Container = styled.div`
  > p {
    color: #fafafa;
    margin: 2rem 0;
  }

  ul {
    margin-bottom: 3rem;

    li {
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        display: block;
        margin-right: 5rem;
      }

      input {
        text-align: center;
        background: #0000002a;
        border: 1px solid #777;
        color: #fafafa;
        border-radius: .5rem;
        width: 6rem;
        padding: .2rem .5rem;
      }
    }
  }
`
