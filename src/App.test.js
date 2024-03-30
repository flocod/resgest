import { render,screen, fireEvent  } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Checkout from './menuApp/pages/Checkout';
import Finalize from './menuApp/pages/Finalize';


describe("Checkout component", () => {
  test("renders Checkout component", () => {
    render(
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    );

    const nomInput = screen.getByPlaceholderText("Entrez votre nom");
    const telInput = screen.getByPlaceholderText("Entrez votre téléphone");
    const commentInput = screen.getByPlaceholderText("Entrez un commentaire");
    const mangezRadio = screen.getByLabelText("Manger sur place");
    const emportezRadio = screen.getByLabelText("Emporter");
    const submitButton = screen.getByText("Commander");

    expect(nomInput).toBeInTheDocument();
    expect(telInput).toBeInTheDocument();
    expect(commentInput).toBeInTheDocument();
    expect(mangezRadio).toBeInTheDocument();
    expect(emportezRadio).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("submits form with valid data", () => {
    render(
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    );

    const nomInput = screen.getByPlaceholderText("Entrez votre nom");
    const telInput = screen.getByPlaceholderText("Entrez votre téléphone");
    const mangezRadio = screen.getByLabelText("Manger sur place");
    const submitButton = screen.getByText("Commander");

    fireEvent.change(nomInput, { target: { value: "John Doe" } });
    fireEvent.change(telInput, { target: { value: "1234567890" } });
    fireEvent.click(mangezRadio);
    fireEvent.click(submitButton);

    // Add your assertions here for the expected behavior after form submission
  });
});


describe("Finalize component", () => {
  test("renders Finalize component", () => {
    render(
      <MemoryRouter>
        <Finalize />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { name: "Nous avons recu votre Commande" });
    const paragraph = screen.getByText(
      "Restez sur cette page pour suivre en tant réel l’évolution de votre commande"
    );
    const link = screen.getByRole("link", { name: "Allez à la page d'acceuil" });

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});