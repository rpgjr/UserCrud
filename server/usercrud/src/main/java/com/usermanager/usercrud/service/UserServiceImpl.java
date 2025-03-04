package com.usermanager.usercrud.service;

import com.usermanager.usercrud.model.Users;
import com.usermanager.usercrud.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Users saveUser(Users user) {
        return userRepository.save(user);
    }

    @Override
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<Users> getById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public String deleteByUserId(Integer id) {
        userRepository.deleteById(id);
        return "Successfully deleted";
    }

    @Override
    public Users updateUser(Integer id, Users newUser) {
        Optional<Users> getUser = userRepository.findById(id);

        if (getUser.isPresent()) {
            Users setToNewUser = getUser.get();
            setToNewUser.setId(newUser.getId());
            setToNewUser.setName(newUser.getName());
            setToNewUser.setUsername(newUser.getUsername());
            setToNewUser.setEmail(newUser.getEmail());
            setToNewUser.setPhone(newUser.getPhone());
            setToNewUser.setAddress(newUser.getAddress());
            setToNewUser.setUserType(newUser.getUserType());
            setToNewUser.setPosition(newUser.getPosition());
            setToNewUser.setDateCreated(newUser.getDateCreated());

            return userRepository.save(setToNewUser);
        }
        else {
            return null;
        }
    }
}
