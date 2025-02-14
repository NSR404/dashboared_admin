import React from "react";
import Notice from "../../../partials/content/Notice";
import CodeExample from "../../../partials/content/CodeExample";
import { Alert, Button } from "react-bootstrap";

class AlertDismissible extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    return (
      <>
        <Alert show={this.state.show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleHide} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>

        {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}
      </>
    );
  }
}
class AlertDismissibleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    const handleDismiss = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    if (this.state.show) {
      return (
        <Alert variant="danger" onClose={handleDismiss} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
    return <Button onClick={handleShow}>Show Alert</Button>;
  }
}

export default class AccordionExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning kt-font-primary">
          <p>
            Provide contextual feedback messages for typical user actions with
            the handful of available and flexible alert messages.
          </p>
          <p>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="kt-link"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/alerts/"
            >
              demos & documentation
            </a>
          </p>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <CodeExample jsCode={jsCode1} beforeCodeTitle="Examples">
              <div className="kt-section">
                <span className="kt-section__sub">
                  Alerts are available for any length of text, as well as an
                  optional dismiss button. For proper styling, use one of the
                  eight <code>variant</code>s.
                </span>
                <div className="kt-separator kt-separator--dashed"></div>
                {[
                  "primary",
                  "secondary",
                  "success",
                  "danger",
                  "warning",
                  "info",
                  "light",
                  "dark"
                ].map((variant, idx) => (
                  <Alert key={idx} variant={variant}>
                    This is a {variant} alert—check it out!
                  </Alert>
                ))}
              </div>
            </CodeExample>
          </div>
          <div className="col-md-6">
            <CodeExample jsCode={jsCode2} beforeCodeTitle="Links">
              <div className="kt-section">
                <span className="kt-section__sub">
                  For links, use the <code>&lt;Alert.Link&gt;</code> component
                  to provide matching colored links within any alert.
                </span>
                <div className="kt-separator kt-separator--dashed"></div>
                {[
                  "primary",
                  "secondary",
                  "success",
                  "danger",
                  "warning",
                  "info",
                  "light",
                  "dark"
                ].map((variant, idx) => (
                  <Alert key={idx} variant={variant}>
                    This is a {variant} alert with &nbsp;
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                  </Alert>
                ))}
              </div>
            </CodeExample>
          </div>
        </div>

        <CodeExample jsCode={jsCode3} beforeCodeTitle="Additional content">
          <div className="kt-section">
            <span className="kt-section__sub">
              Alerts can contain whatever content you like. Headers, paragraphs,
              dividers, go crazy.
            </span>
            <div className="kt-separator kt-separator--dashed"></div>
            <Alert variant="success">
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </Alert>
          </div>
        </CodeExample>

        <div className="row">
          <div className="col-md-6">
            <CodeExample jsCode={jsCode4} beforeCodeTitle="Dismissing">
              <div className="kt-section">
                <span className="kt-section__sub">
                  Add the <code>dismissible</code> prop to add a functioning
                  dismiss button to the Alert.
                </span>
                <div className="kt-separator kt-separator--dashed"></div>
                <AlertDismissibleExample />
              </div>
            </CodeExample>
          </div>
          <div className="col-md-6">
            <CodeExample jsCode={jsCode5} beforeCodeTitle="Dismissing">
              <div className="kt-section">
                <span className="kt-section__sub">
                  You can also control the visual state directly which is great
                  if you want to build more complicated alerts.
                </span>
              </div>
              <div className="kt-separator kt-separator--dashed"></div>
              <div className="kt-section">
                <AlertDismissible />
              </div>
            </CodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
));
`;
const jsCode2 = `
[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert with{' '}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
));
`;
const jsCode3 = `
<Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
`;
const jsCode4 = `
class AlertDismissibleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    const handleDismiss = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    if (this.state.show) {
      return (
        <Alert variant="danger" onClose={handleDismiss} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
    return <Button onClick={handleShow}>Show Alert</Button>;
  }
}

render(<AlertDismissibleExample />);
`;
const jsCode5 = `
class AlertDismissible extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    return (
      <>
        <Alert show={this.state.show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleHide} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>

        {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}
      </>
    );
  }
}

render(<AlertDismissible />);
`;
