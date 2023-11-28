import Barang from '../models/barangModel.js';

export const getAllBarang = async (req, res) => {
  try {
    const response = await Barang.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getBarangById = async (req, res) => {
  try {
    const { barangId } = req.params;
    const barang = await Barang.findByPk(barangId);

    if (!barang) {
      return res.status(404).json({ msg: 'Barang not found' });
    }

    res.status(200).json(barang);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const createBarang = async (req, res) => {
  const { NamaBarang, Satuan, HargaSatuan, Stok } = req.body;

  try {
    // Pastikan nama kolom dan nilai sesuai dengan model Barang
    const newBarang = await Barang.create({
      NamaBarang,
      Satuan,
      HargaSatuan,
      Stok,
    });

    res.status(201).json(newBarang);
  } catch (error) {
    console.error(error);

    // Jika error disebabkan oleh validasi Sequelize
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ msg: error.errors[0].message });
    }

    res.status(500).json({ msg: 'Internal Server Error' });
  }
};


export const updateBarang = async (req, res) => {
  try {
    const { barangId } = req.params;
    const barang = await Barang.findByPk(barangId);

    if (!barang) {
      return res.status(404).json({ msg: 'Barang not found' });
    }

    await barang.update(req.body);

    res.status(200).json(barang);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const deleteBarang = async (req, res) => {
  try {
    const { barangId } = req.params;
    const barang = await Barang.findByPk(barangId);

    if (!barang) {
      return res.status(404).json({ msg: 'Barang not found' });
    }

    await barang.destroy();

    res.json({ msg: 'Barang deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

