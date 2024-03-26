import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './index.css';

const PlacementAssistance = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <section id="placement-assistance">
            <div className="container">
                <h2>100% Placement Assistance</h2>
                <Button variant="primary" onClick={handleShowModal}>
                    Request Call Back
                </Button>

                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Your request has been submitted successfully.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="indigolearn-section">
                    <h3>Kick off your ACCA Prep journey with IndigoLearn</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus aliquam, fermentum felis ac, euismod turpis. Cras consectetur blandit erat, sit amet lacinia felis dignissim vitae. Proin accumsan felis vel sapien fringilla, a mattis purus placerat. Integer lacinia vitae mi ut consequat. Donec ullamcorper volutpat ultricies. In tristique dui non nunc aliquam, in congue nulla interdum.</p>
                    <Button variant="primary">Learn More</Button>
                </div>
            </div>
        </section>
    );
};

export default PlacementAssistance;
