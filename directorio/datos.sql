USE directorio;

DELETE FROM phodom WHERE idepho=1;
DELETE FROM phodom WHERE idepho=2;
DELETE FROM phodom WHERE idepho=3;

DELETE FROM adrdom WHERE ideadr=1;
DELETE FROM adrdom WHERE ideadr=2;
DELETE FROM adrdom WHERE ideadr=3;

DELETE FROM condom WHERE idecon=1;
DELETE FROM condom WHERE idecon=2;

INSERT INTO condom VALUES (1, '09/10/1990', 'Juan Pablo', 'https://miro.medium.com/max/3840/1*_laiUDqvJrVn5Skp8bpoSg.jpeg', 'Perez');
INSERT INTO condom VALUES (2, '09/10/1990', 'Carolina', 'https://www.thatbangkoklife.com/wp-content/uploads/2020/03/koh-nang-yuan.jpg', 'Weeber');

INSERT INTO adrdom VALUES (1, 'Street redux 864', 'Home', 1);
INSERT INTO adrdom VALUES (2, 'Street base 64', 'Home', 2);
INSERT INTO adrdom VALUES (3, 'Street Lombok 864', 'Work', 2);

INSERT INTO phodom VALUES (1, 57, 'Home', '198742222', 1);
INSERT INTO phodom VALUES (2, 57, 'Work', '198745632', 1);
INSERT INTO phodom VALUES (3, 57, 'Home', '198967458', 2);