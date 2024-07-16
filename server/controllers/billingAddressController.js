import BillingAddress from '../models/BillingAddress.js';

const createBillingAddress = async (req, res) => {
    try {
        const billingAddress = await BillingAddress.createBillingAddress(req.user.id, req.body);
        res.status(201).json(billingAddress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBillingAddress = async (req, res) => {
    try {
        const billingAddress = await BillingAddress.getBillingAddressByUserId(req.user.id);
        if (!billingAddress) {
            return res.status(404).json({ message: "Billing address not found" });
        }
        res.status(200).json(billingAddress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBillingAddress = async (req, res) => {
    try {
        const billingAddress = await BillingAddress.updateBillingAddress({ id: req.params.id, user_id: req.user.id, ...req.body });
        res.status(200).json(billingAddress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBillingAddress = async (req, res) => {
    try {
        const billingAddress = await BillingAddress.deleteBillingAddress(req.params.id, req.user.id);
        res.status(200).json({ message: "Billing address deleted", billingAddress });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createBillingAddress, getBillingAddress, updateBillingAddress, deleteBillingAddress };
