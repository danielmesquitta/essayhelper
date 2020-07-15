import styled from 'styled-components'

export const Container = styled.div`
  > p {
    color: #fafafa;
    margin: 20px 0;
  }

  ul {
    margin-bottom: 30px;

    li {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        display: block;
        margin-right: 50px;
      }

      input {
        text-align: center;
        background: #0000002a;
        border: 1px solid #777;
        color: #fafafa;
        border-radius: 5px;
        width: 60px;
        padding: 2px 5px;
      }
    }
  }
`
