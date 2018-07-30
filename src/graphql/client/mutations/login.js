export const LOGIN = gql`
  mutation Login($status = Boolean!) {
    toggleTodo(id: $id) @client
  }
`;