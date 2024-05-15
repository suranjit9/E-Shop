import Container from "../components/Container";
import FormWrap from "../components/From/FormWrap";
import SignupFrom from "../components/From/SignupFrom";

const page = () => {
  return (
    <Container>
      <FormWrap>
        <SignupFrom />
      </FormWrap>
    </Container>
  );
};

export default page;
