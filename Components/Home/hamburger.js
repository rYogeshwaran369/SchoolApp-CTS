import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  const handleCareer = () => {
    navigation.navigate('CareerPage');
  };
  const handleSports = () => {
    navigation.navigate('SportsPage');
  };
  const handleAlumni = () => {
    navigation.navigate('AlumniPage');
  };
  const handleHome = () => {
    navigation.navigate('Postpage');
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.hamburgerButton} onPress={toggleMenu}>
        <Ionicons
          name={isOpen ? 'close' : 'menu'}
          size={30}
          color="#333"
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.menu}>
          
           <TouchableOpacity onPress={handleHome} style={styles.menuItem}>
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCareer} style={styles.menuItem}>
            <Text style={styles.menuItemText}>Career Guidance</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSports} style={styles.menuItem}>
            <Text style={styles.menuItemText}>Sports</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAlumni} style={styles.menuItem}>
            <Text style={styles.menuItemText}>AlumniNetwork</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginleft:'auto',
    // zIndex:-4
  },
  menu: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    borderWidth:1
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HamburgerMenu;
