import React from 'react';
import { MDBAccordion, MDBAccordionItem, MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCheckbox, MDBCol, MDBContainer, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import './Advanced.css'
import India from '../../..//Image/indiaflag.png'
export default function Advanced() {
  return (
    <MDBContainer className="my-5 py-5" style={{maxWidth: '1100px'}}>
      <section>
        <MDBRow>
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <p className="text-uppercase h4 text-font">Delivery Country:</p>
                <MDBRow>
                  <MDBCol md="1">
                    <MDBCardImage src={India}
                      className="rounded-circle me-2"
                      style={{ width: '35px' }}
                      alt="USA" />
                  </MDBCol>
                  <MDBCol md="8">
                    {/* PRO NEEDED */}
                    <select className="custom-select">
                      <option value="1">India</option>
                      {/* <option value="2">Spain</option>
                      <option value="3">Poland</option>
                      <option value="4">Italy</option>
                      <option value="5">Greece</option>
                      <option value="6">Germany</option>
                      <option value="7">Croatia</option>
                      <option value="8">Sweden</option> */}
                    </select>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBAccordion className="card mb-4">
              <MDBAccordionItem collapseId={1} className="border-0" headerTitle='Promo/Student Code or Vouchers'>
                <MDBInput label='Enter code' type='text' />
              </MDBAccordionItem>
            </MDBAccordion>

            <MDBCard className="mb-4">
              <MDBCardBody>
                <p className="text-uppercase fw-bold mb-3 text-font">Email address</p>
                <MDBRow>
                  <MDBCol md="4">
                    <p>your-email@gmail.com</p>
                  </MDBCol>
                  <MDBCol md="7">
                    <MDBBtn outline color="dark" className="float-end button-color">Change</MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4 position-statics">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0 text-font">
                  1 item <span className="float-end mt-1" style={{ fontSize: '13px' }}>Edit</span>
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="4">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                      className="rounded-3" style={{ width: '100px' }} alt="Blue Jeans Jacket" />
                  </MDBCol>
                  <MDBCol md="6" className="ms-3">
                    <span className="mb-0 text-price">$35.00</span>
                    <p className="mb-0 text-descriptions">Denim jacket </p>
                    <span className="text-descriptions fw-bold">Black</span> <span
                      className="text-descriptions fw-bold">UK 8</span>
                    <p className="text-descriptions mt-0">
                      Qty:<span className="text-descriptions fw-bold">1</span>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBCardFooter className="mt-4">
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                    Subtotal
                    <span>$35.00</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                    Total to pay
                    <span>$35.00</span>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>

          <MDBCol md="8" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">Delivery address</MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <form>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='First name' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Last name' type='text' />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput label='Company name' type='text' />
                  <MDBInput label='Address' type='text' />
                  <MDBInput label='Email' type='text'  />
                  <MDBInput label='Phone' type='text'  />
                  <MDBTextArea label='Additional information' rows={4}  />

                  <div className="d-flex justify-content-center">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
            <div className="text-center">
              <MDBBtn className="button-order col-md-10">Continue To Payment</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}